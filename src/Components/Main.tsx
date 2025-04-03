function Main(props: any) {
   const userName = 'Lakshan Jayawardana'
   const position = 'Software Engineer' 
   const users = {
    name :`${userName}`,
    position : `${position}`
   }
  return (
    <div>
      Main component
      {props.children}
      {users.name}
      {position}
    </div>
  );
}
export default Main;
