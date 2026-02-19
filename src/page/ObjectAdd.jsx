import { useEffect, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Input, Button, Combobox, Textarea, Loading } from '../components';
import icon from '../util/icon';
import { useDispatch, useSelector } from "react-redux";
import generateSlug from '../util/slug';
import { getObjects, addObject, resetAddMessage } from "../store/actions/object";
import { toast } from "react-toastify";
const { MdChevronRight } = icon;
const ObjectEdit = () => {
    
    const activeData = [
        {
            id: 'yes',
            text: 'Yes'
        },
        {
            id: 'no',
            text: 'No'
        }
    ]
    const dispatch = useDispatch();
    const { items: objects, addMessage, loading: addLoading } = useSelector(state => state.object || { items: [], loading: false });
    useEffect(() => {
        dispatch(getObjects());
    }, [dispatch])
    const [formData, setFormData] = useState({
        name: '',
        thumbnail: '',
        parentId: '',
        index: '9999',
        active: 'yes',
        description: '',
        slug: '',
    })
    const handleChange = (e, selected) => {
        const { name, value } = e.target;
        const nextValue = selected ? selected.id || selected._id : value;
        setFormData((prev) => {
            const updated = {
                ...prev,
                [name]: nextValue,
            };
            if (name === "name") {
                updated.slug = generateSlug(nextValue);
            }
            return updated;
        });
    };
    const navigate = useNavigate()
    const handleSubmit  = (e) => {
        e.preventDefault();
        dispatch(addObject(formData))
        setFormData({
            name: '',
            thumbnail: '',
            parentId: '',
            index: '9999',
            active: 'yes',
            description: '',
            slug: '',
        })
    }
    useEffect(() => {
        if(addMessage === 'Thêm môn học thành công!') {
            navigate("/object")
            toast.success(addMessage)
            dispatch(resetAddMessage())
        }else if(addMessage){
            toast.error(addMessage)
            dispatch(resetAddMessage())
        }
    }, [addMessage, navigate, dispatch])
    
    return (
        <div className="full pt-3 sm:pt-5">
            {addLoading && <Loading />}
            <div className="w-full px-4 sm:px-6 md:px-7.5 flex gap-4 sm:gap-8">
                <div className="w-full">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-[15px] text-color">
                        <NavLink to={'/'} className={"hover:text-blue-600 transition duration-300 ease-linear"}>
                            Home
                        </NavLink>
                        <MdChevronRight className="text-sm sm:text-base"/>
                        <NavLink to={'/object'} className={"text-blue-600"}>
                            Danh mục
                        </NavLink>
                        <MdChevronRight className="text-sm sm:text-base"/>
                        <NavLink to={'/object/add'} className={"text-blue-600"}>
                            Thêm mới store
                        </NavLink>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-[35px] font-semibold mt-3 sm:mt-0">Thêm mới store</h2>
                </div>
            </div>
            <form className="w-full px-4 sm:px-6 md:px-7.5 bg-white mt-4 sm:mt-8 min-h-screen" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col sm:flex-row border-b-custom py-5 sm:py-10">
                    <div className="w-full sm:w-2/6 hidden sm:block">
                        <h5 className="text-lg sm:text-[20px] font-medium text-black text-color mt-0 sm:mt-5">
                            Thông tin store
                        </h5>
                        <p className="text-[12px] text-[#888] line-clamp-2">
                            Thông tin chi tiết về store
                        </p>
                    </div>
                    <div className="w-full sm:flex-1">
                        <Input 
                            label={"Object name"} 
                            name={"name"}
                            onChange={handleChange}
                            value={formData?.name}
                        />
                        <Input 
                            label={"Slug"} 
                            name={"slug"}
                            onChange={handleChange}
                            value={formData?.slug}
                        />
                        <Input 
                            label={"Thumbnail"} 
                            name={"thumbnail"}
                            onChange={handleChange}
                            value={formData?.thumbnail}
                        />
                        <Input 
                            label={"Index"} 
                            type={"number"}
                            name={"index"}
                            onChange={handleChange}
                            value={formData?.index}
                        />
                        <div className="mt-5"></div>
                        <Combobox
                            label={"Parent object"}
                            name={"parentId"}
                            data={objects}
                            onChange={handleChange}
                            selected={formData?.parentId}
                        />
                        <div className="mt-5"></div>
                        <Combobox
                            label={"Active"}
                            name={"active"}
                            data={activeData}
                            onChange={handleChange}
                            selected={formData?.active}
                        />
                        <Textarea
                            label={"Description"}
                            name={"description"}
                            row={5}
                            onChange={handleChange}
                            children={formData?.description}
                        />
                    </div>
                </div>
                <div className="w-full py-20 relative">
                    <Button type="button" className={"absolute left-[77.777%] transform -translate-x-[210%] top-[50%] border-none! -translate-y-[50%] font-medium "}>
                        <NavLink to={"/object"}>
                            Cancel
                        </NavLink>
                    </Button>
                    <Button type="submit" className={"absolute left-[77.777%] transform -translate-x-full top-[50%] -translate-y-[50%] shadow-md py-1! font-medium text-white bg-blue-500"}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ObjectEdit