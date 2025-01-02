export type Sitemap = {
    text: string;
    url: string;
    imageUrl: string;
}

const SITEMAP: Sitemap[] = [
    {
        text: 'CRIAÇÃO',
        url: '/creation/saias',
        imageUrl: '/imgs/saia_icon.png',
    },
    {
        text: 'BASE',
        url: '/base',
        imageUrl: '/imgs/base_icon.png',
    },
    {
        text: 'MODELAGEM',
        url: '/modeling',
        imageUrl: '/imgs/modelagem_icon.png',
    },
    {
        text: 'CORTE',
        url: '/cutting',
        imageUrl: '/imgs/tesoura_icon.png',
    },
    {
        text: 'CONFECÇÃO',
        url: '/making',
        imageUrl: '/imgs/maquina_icon.png',
    },
];

export default SITEMAP;
