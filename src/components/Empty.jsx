import PropTypes from "prop-types"

const Empty = ({title, subTitle, colSpan = 8}) => {
    return (
        <tr>
            <td colSpan={colSpan} className="text-center text-gray-500">
                <div className="flex flex-col items-center justify-center py-8">
                    {title && <p className="text-lg font-medium">{title}</p>}
                    {subTitle && <p className="text-sm text-gray-500">{subTitle}</p>}
                </div>
            </td>
        </tr>
    )
}

Empty.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    colSpan: PropTypes.number
}

export default Empty