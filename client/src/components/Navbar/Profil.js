import React, { useEffect } from "react";
import { Button, Modal, Image, Header } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import "./Profil.css";
import { useHistory } from "react-router";
import { current } from "../../js/actions/user";

function Profil() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  function handleclick() {
    history.push("/EditProfil");
  }
  useEffect(() => {
    dispatch(current());
  }, []);

  return (
    <div>
      {user ? (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={
            <Button
              style={{
                borderRadius: "45%",

                backgroundColor: "black",
                display: "inline-block",
                height: "0.01px",
                padding: "0",
                margin: "0",
                verticalAlign: "top",
                width: "0.01px",
                marginLeft: "10px",
              }}
            >
              {user && user.isAdmin ? (
                <img
                  style={{
                    display: "block",
                    height: "40px",
                    width: "40px",
                    borderRadius: "45%",
                  }}
                  src={user.img}
                />
              ) : (
                <img
                  style={{ display: "block", height: "40px", width: "40px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
                />
              )}
            </Button>
          }
          style={{
            marginLeft: "1130px",
            marginTop: "50px",
            width: "350px",
            height: "350px",
            borderRadius: "10%",
          }}
        >
          <Modal.Header>Profil</Modal.Header>
          <Modal.Content image>
            {user && user.isAdmin ? (
              <Image
                style={{ borderRadius: "50%" }}
                size="small"
                src={user.img}
                
              />
            ) : (
              <Image
                size="small"
                src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                wrapped
              />
            )}

            <Modal.Description>
              <Header>
                {user.name} {user.lastname}
              </Header>
              <p>{user.email}</p>
              <p>you are welcome to your profil</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="edit"
              labelPosition="right"
              icon="checkmark"
              onClick={() => handleclick()}
              positive
            />
          </Modal.Actions>
        </Modal>
      ) : (
        <h1>loading..</h1>
      )}
    </div>
  );
}

export default Profil;
