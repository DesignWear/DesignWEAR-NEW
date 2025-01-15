export type Sitemap = {
    text: string;
    url: string;
    imageUrl: string;
}

const SITEMAP: Sitemap[] = [
    {
        text: 'CRIAÇÃO',
        url: '/app/creation/saias',
        imageUrl: '/imgs/saia_icon.png',
    },
    {
        text: 'BASE',
        url: '/app/base',
        imageUrl: '/imgs/base_icon.png',
    },
    {
        text: 'MODELAGEM',
        url: '/app/modeling',
        imageUrl: '/imgs/modelagem_icon.png',
    },
    {
        text: 'CORTE',
        url: '/app/cutting',
        imageUrl: '/imgs/tesoura_icon.png',
    },
    {
        text: 'CONFEÇÃO',
        url: '/app/making',
        imageUrl: '/imgs/maquina_icon.png',
    },
];

export default SITEMAP;
