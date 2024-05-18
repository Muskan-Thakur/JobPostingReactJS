import { Box, Modal } from "@mui/material";

const Loader = (props) => {
  const style = {
    outline: "none",
    width:"100%",
    heigt:"100%"
  };
  return (
    <Box>
      {props.isLoad ? (
        <Modal open>
          <Box className="loader_loading" sx={style}>
            <figure style={{textAlign:"center",marginTop:"20%"}}>
              <img src="/loader/Loader.gif" width={"200px"} alt="loading" />
            </figure>
          </Box>
        </Modal>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Loader;
