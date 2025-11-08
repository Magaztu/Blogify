import nextMDX from '@next/mdx';
import { withContentlayer } from 'next-contentlayer';

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    // options: {
    //     providerImportSource: '@mdx-js/react',
    // },
});

const nextConfig = {
    pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
};

export default withContentlayer(withMDX(nextConfig))