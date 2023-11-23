


    const ItemList = ({ titles }) => {
        return (
          <ul>
            {titles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        );
      };



export default ItemList;