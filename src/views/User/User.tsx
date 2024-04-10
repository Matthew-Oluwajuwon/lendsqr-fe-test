import "./User.scss"
import UserList from "./UserList"
import UserStatistics from "./UserStatistics"

export const User: React.FC = () => {
    document.title = "Users | Lendsqr"
  return (
    <div className="users">
        <h1 className="users__heading">Users</h1>
        <UserStatistics />
        <UserList />
    </div>
  )
}
