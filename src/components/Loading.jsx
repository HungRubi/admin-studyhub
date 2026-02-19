const Loading = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center fixed top-0 left-0 bg-white/60 z-50">
            <img 
                src="/gif/loading.gif" 
                alt="Loading..." 
                className="max-w-30"
            />
        </div>
    )
}

export default Loading;