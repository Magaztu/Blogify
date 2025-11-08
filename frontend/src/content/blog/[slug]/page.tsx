import { notFound } from "next/navigation";
import fs from 'fs';
import path from 'path';
import {bundleMDX} from 'mdx-bundler';
import {useMDXComponent} from 'next-contentlayer/hooks';

export default async function PostPage({params}: {params: {slug: string}}){
    const slug = params.slug;
    const fullPath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);

    if(!fs.existsSync(fullPath)){
        notFound();
    }

    const mdxSource = fs.readFileSync(fullPath, 'utf-8');
    //needa use bundlemdx for react support or smth
    
    return (
        <article className="prose prose-invert prose-pre:bg-gray-800">
            {/* smth smth undone */}
            <h1 className="text-3x1 font-bold mb-4">{slug}</h1>
            <div dangerouslySetInnerHTML={{__html: mdxSource}} />
        </article>
    );
}