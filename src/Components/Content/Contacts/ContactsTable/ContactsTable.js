import React from "react";
import s from './ContactsTable.module.scss';
import Loader from "react-loader-spinner";
import {connect} from "react-redux";
import {userFetch} from "../../../../store/UserList";

class _ContactsTable extends React.Component {

    componentDidMount() {
        this.props.userLoad();
    }

    render() {
        const users = this.props.users
        const loader = this.props.loader
        const loaderS = (<Loader
            type="ThreeDots"
            color="#ffff"
            height={80}
            width={80}
            timeout={3000} //3 secs
        />)
        const userList = users.map((user, index) => {
            return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.phone}</td>
                </tr>
            )
        })

        return (
            <div className={s.wrapper}>
                <table>
                    <thead>
                    <tr>
                        <td>№</td>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Phone number</td>
                    </tr>
                    </thead>
                    <tbody>
                    {userList}
                    </tbody>
                </table>
                {loader ? loaderS : null}
            </div>
        )

    }

}

function MapStateToProps(state) {
    return {
        users: state.usersList.users,
        loader: state.usersList.isFetching
    }
}

export const ContactsTable = connect(MapStateToProps, {
    userLoad: userFetch
})(_ContactsTable);