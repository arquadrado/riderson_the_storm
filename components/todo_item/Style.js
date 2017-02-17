export default ({ color = '#ff0000', itemId, itemCount }) => (
    <style>{`
        .item-${itemId} {
            position: relative;
            background-color: ${color};
            float: left;
            color: #fff;
            height: 100%;
            width: ${100 / itemCount}%;
        }
    `}</style>
)