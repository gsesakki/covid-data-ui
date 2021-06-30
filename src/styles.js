import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 3)
  },

  icons: {
    marginRight: '20px'
  },

  spacing_left_3: {
    marginLeft: '20px',
    minWidth: '250px'
  },

  label_font_size: {
    marginLeft: '20px',
    fontSize: '12px',
  },

  button_spacing: {
    padding: theme.spacing(3, 0, 3)
  },

  button_width: {
    width: "155px"
  }

}));

export default useStyles;