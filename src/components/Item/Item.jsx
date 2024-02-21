

const Item = ({name, img}) => {
  return (
    <div>
        <h1>{name}</h1>
        <img src={img} style={{width: 100}} />
    </div>
  )
}

export default Item
