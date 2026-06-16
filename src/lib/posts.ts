import * as fs from 'fs';
import * as path from 'path';

const postsDirectory = path.join(process.cwd(), 'src/content/writing');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const mdxFiles = fileNames.filter((fileName) => fileName.endsWith('.mdx'));

  const posts = mdxFiles.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    // Extract frontmatter
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) {
      throw new Error(`Invalid frontmatter in ${fileName}`);
    }

    const frontmatter = frontmatterMatch[1]
      .split('\n')
      .reduce((acc: Record<string, string>, line) => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          acc[key.trim()] = valueParts.join(':').trim();
        }
        return acc;
      }, {});

    return {
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || '',
      category: frontmatter.category || 'General',
      excerpt: frontmatter.excerpt || '',
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostMetadata | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

export function getPostContent(slug: string): string {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const contentStart = fileContent.indexOf('---\n', 3) + 4;
  return fileContent.slice(contentStart);
}
