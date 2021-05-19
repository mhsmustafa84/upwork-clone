import img from '../../../assets/Img/icon-user.svg'

export default function IncomeMsg({ msg }) {
    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img
                    className="fas fa-user_img"
                    src={img}
                    alt="Profile Pic"
                />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{msg.Msg}</p>
                    <span className="time_date">{new Date(msg.time.seconds * 1000).toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}
