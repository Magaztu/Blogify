import nextMDX from '@next/mdx';

const withMDX = nextMDX({
    extension: /\.mdx?$/,
    options: {
        providerImportSource: '@mdx-js/react',
    },
});

const nextConfig = {
    pageExtensions: ['ts','tsx','js','jsx','md','mdx'],
};

export default withMDX(nextConfig)