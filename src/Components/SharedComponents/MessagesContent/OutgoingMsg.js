export default function OutgoingMsg({ msg }) {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{msg.Msg}</p>
                <span className="time_date">{new Date(msg.time.seconds * 1000).toLocaleString()}</span>
            </div>
        </div>
    )
}
