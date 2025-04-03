export type Sitemap = {
    id: string;
    text: string;
    url: string;
    imageUrl: string;
}

const SITEMAP: Sitemap[] = [
    {
        id: 'criacao',
        text: 'Criação',
        url: '/app/creation',
        imageUrl: '/imgs/saia_icon.svg',
    },
    {
        id: 'base',
        text: 'Base',
        url: '/app/base',
        imageUrl: '/imgs/base_icon.svg',
    },
    {
        id: 'modelagem',
        text: 'Modelagem',
        url: '/app/modeling',
        imageUrl: '/imgs/modelagem_icon.svg',
    },
    {
        id: 'corte',
        text: 'Corte',
        url: '/app/cutting',
        imageUrl: '/imgs/tesoura_icon.svg',
    },
    {
        id: 'confecao',
        text: 'Confeção',
        url: '/app/making',
        imageUrl: '/imgs/maquina_icon.svg',
    },
];

export default SITEMAP;
