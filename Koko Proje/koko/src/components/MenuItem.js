function MenuItem({ image, name, content, price }) {
  return (
    <div className="menu-item"> 
      <img src={image} alt={name} /> 
      <h2>{name}</h2>
      <h6>{content}</h6>
      <p>{price} TL</p>
    </div>
  );
}

export default MenuItem;
