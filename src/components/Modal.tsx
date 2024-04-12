import React from 'react'



const Modal = ({onClose}: {onClose: () => void}) => {

  const userNotifications = [
    {
      id: 1,
      message: "You have a new message from John Doe",
      read: false,
    },
    {
      id: 2,
      message: "You have a new message from Jane Doe",
      read: false,
    },
    {
      id: 3,
      message: "Your application has been approved",
      read: true,
    },
  ]

  var readStatus = true

  console.log(readStatus);
  
  
  


  return (
    <div>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex justify-between gap-3 flex-col">
          <h3 className="text-lg font-bold">Your Notifications !!</h3>
          {userNotifications.map((notification) => (
            <div key={notification.id} className="card ">
              <div className="flex justify-between">
                <p> {notification.id}.  {notification.message}</p>
                <button className="btn btn-sm" onClick={()=> {
                  readStatus = false
                }}> {
                  readStatus ? "Mark as Read" : "Mark as Unread"
                  
                }
                </button>
              </div>
            </div>
          ))}
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={onClose}
        >
          Close
        </label>
      </div>
    </div>
  );
}

export default Modal