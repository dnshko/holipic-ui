
const customInputStyle = {
    underline: {
      "&:hover:not($disabled):before,&:before": {
        borderColor: "#AAAAAA !important",
        borderWidth: "1px !important"
      },
      "&:after": {
        borderColor: "#1DA5E8"
      }
    },
    labelRoot: {
      color: "#AAAAAA !important",
      "& + $underline": {
        marginTop: "0px"
      },
      "&:after": {
        color: "#1DA5E8 !important",
      }
    },
    labelRootError: {
      color: "#1DA5E8" + " !important"
    },
    formControl: {
      margin: "0 0 17px 0",
      paddingTop: "27px",
      position: "relative",
      "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
        color: "#495057"
      }
    },
    input: {
      color: "#1DA5E8",
      height: "unset",
      "&,&::placeholder": {
        fontSize: "14px",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: "400",
        lineHeight: "1.42857",
        opacity: "1"
      },
      "&::placeholder": {
        color: "#AAAAAA"
      }
    },
    whiteInput: {
      "&,&::placeholder": {
        color: "#FFFFFF",
        opacity: "1"
      }
    }
  };
  
  export default customInputStyle;
  