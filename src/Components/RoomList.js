import React, { Component } from "react";
import RoomDelete from "../Components/RoomDelete";

class RoomList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(item => (
          <div key={item.roomName}>
            {item.roomName}호 {item.price}원
            <RoomDelete
              item={item.roomName}
              stateRefresh={this.props.stateRefresh}
            />
          </div>
        ))}
      </ul>
    );
  }
}

export default RoomList;

//const RoomList = () => {
//   const [data, setData] = useState([]);
//   const [isChanged, setChange] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get("http://localhost:3002/room/");
//       setData(result.data);
//     };
//     fetchData();
//   }, [isChanged]);

//   console.log("룸리스트의 체인지", isChanged);

//   return (
//     <ul>
//       {data.map(item => (
//         <div key={item.roomName}>
//           {item.roomName}호 {item.price}원
//           {/* <button onClick={handleDelete}>삭제</button> */}
//           <RoomDelete
//             item={item.roomName}
//             state={{ isChanged: [isChanged, setChange] }}
//           />
//         </div>
//       ))}
//     </ul>
//   );
// };
//export default RoomList;
