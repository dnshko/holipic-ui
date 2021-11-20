import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    '&$checked': {
      color: "#1DA5E8",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

    return (
        <GreenRadio
            size="small"
        />
    );
}
