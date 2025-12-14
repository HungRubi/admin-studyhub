import icon from './icon';

const {
    IoHomeOutline, LuUser,  
    IoSettingsOutline, FaSortDown,
    BsTag,FaCaretRight,
    HiOutlineNewspaper,LuReceiptText,FaRegFileLines,
    MdOutlineWidgets,IoMenu
} = icon;

export const menu = [
    {
        text: 'Dashboard',
        icon: <IoHomeOutline className='text-base text-color'/>,
        path: ''
    },
    {
        text: 'Objects',
        icon: <BsTag className='text-base text-color'/>,
        path: '/object',
    },
    {
        text: 'Quản lý tin tức',
        icon: <HiOutlineNewspaper className='text-base text-color'/>,
        path: '/new'
    },
    {
        text: 'Trang nội dung',
        icon: <LuReceiptText className='text-base text-color'/>,
        path: '/page-content',
    },
    {
        text: 'Widget',
        icon: <MdOutlineWidgets className='text-base text-color'/>,
        path: '/widget',
    },
    {
        text: 'Menu',
        icon: <IoMenu className='text-base text-color'/>,
        path: '/menu',
    },
    {
        text: 'Quản lý file',
        icon: <FaRegFileLines className='text-base text-color'/>,
        path: '/file',
    },
    {
        text: 'Quản lý user',
        icon: <LuUser className='text-base text-color'/>,
        path: '/user',
    },
    {
        text: 'Quản lý cấu hình',
        icon: <IoSettingsOutline className='text-base text-color'/>,
        path: '/category/product',
        icon2: <FaSortDown className='text-base text-color mb-1'/>,
        Children: [
            {
                text: 'Cấu hình chung',
                icon: <FaCaretRight className='text-base text-color'/>,
                path: '/global-config',
            },
            {
                text: 'Cấu hình tác giả',
                icon: <FaCaretRight className='text-base text-color'/>,
                path: '/author-config',
            },
            
            {
                text: 'Cấu hình mạng xã hội',
                icon: <FaCaretRight className='text-base text-color'/>,
                path: '/social-config',
            },
            {
                text: 'Cấu hình SEO',
                icon: <FaCaretRight className='text-base text-color'/>,
                path: '/seo-config',
            },
            {
                text: 'Cấu hình nội dung',
                icon: <FaCaretRight className='text-[19px] text-color'/>,
                path: '/content-config',
            },
        ]
    },
]
