function FreeHeroItem ({ data, itemHover, thisIndex, onItemHover }) {

  return (
    <img 
      onMouseEnter={() => {
        itemHover !== thisIndex && onItemHover(thisIndex)
      }}
      alt="图片"
      style={{
        borderRadius: '5px',
        height: '69px',
        margin: '5px',
        width: `${itemHover === thisIndex ? '224px' : '69px'}`,
      }}
      src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${
        itemHover === thisIndex ? '-freehover.png' : '.jpg'
      }`}/>
  )
}

export default FreeHeroItem;