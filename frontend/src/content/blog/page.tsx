import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
    slug: string,
    title: string,
    date: string

};

export default async function BlogPage() {
    const postDirectory = path.join(process.cwd(), 'src/content/blog');
    const filenames = fs.readdirSync(postDirectory);

    const posts: Post[] = filenames
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
            const slug = file.replace('.mdx','');
            const fullPath = path.join(postDirectory, file);
            const fileContents = fs.readFileSync(fullPath,'utf-8');
            const { data } = matter(fileContents);
            return {
                slug,
                title: data.title || slug,
                date: data.date || 'Unknown date',

            };
        })
        .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return(
      <div className='space-y-6'>
        <h1 className='text-2x1 font-bold'>Blog</h1>
        <div className='space-y-4'>
            {posts.map(post => (
                <article key={post.slug}>
                    <h2 className='text-x1'>
                        <a href={`/blog/${post.slug}`} className='hover:text-cyan-400 transition-colors'>
                            {post.title}
                        </a>
                    </h2>
                    <time className='text-gray-500 text-sm'>{post.date}</time>
                </article>
            ))}

        </div>
      </div>  
    );
}