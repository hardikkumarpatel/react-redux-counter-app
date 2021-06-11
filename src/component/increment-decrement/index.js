import { Button , Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from 'prop-types';
import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import styles from './index.styles';
import SrcVectore from '../../assets/vector/vector.gif'
import loveVector from '../../assets/vector/953-love.gif';
const classNames = require('classnames');

const StateHeading = ({ classes }) => {
  return(
    <div>
       <h2 className={classNames(classes.h3)}>Made with Love <img src={loveVector} height="30" width="30" alt=""/> in React.</h2>
       <h2 className={classNames(classes.h3)}>React Redux Counter App</h2>
    </div>
  )
};
const Decrement = ({ classes, handleDecrement, count}) => {
  return(
    <Button variant="contained" color="primary" className={classNames(classes.buttonStyles)} onClick={handleDecrement} disabled={count === 0}>  - </Button>
  )
};
const CountStateValue = ({ classes, count }) => {
  return(
    <Button variant="contained" color="primary" className={classNames(classes.buttonStyles1)} disabled={true} style={{ color: 'black' }}> {count} </Button>
  )
};
const Increment = ({ classes, handleIncrement }) => {
  return(
    <Button variant="contained" color="primary" className={classNames(classes.buttonStyles2)} onClick={handleIncrement}> + </Button>
  )
};
const ChildElement = ({ classes, count, decrement, encrement }) => {
  return(
    <div>
        <StateHeading classes={classes}/>
        <Decrement classes={classes} handleDecrement={decrement} count={count}/>
        <CountStateValue classes={classes} count={count}/>
        <Increment classes={classes} handleIncrement={encrement}/>
    </div>
  )
};
const ParentElement = ({ classes, count, decrement, encrement }) => {
  return(
    <Paper className={classNames(classes.root)}>
      <div className={classNames(classes.parentDiv)}>
         <div className={classNames(classes.buttonDiv)}>
            <ChildElement classes={classes} count={count} decrement={decrement} encrement={encrement} />
         </div>
      </div>
      <div style={{ marginTop:'-10%', justifyContent: 'center', display:'flex'}}>
        <img src={SrcVectore} alt=""/>
      </div>
    </Paper>
  )
};

class IncrementDecrement extends Component {
  render(){
    const { classes, count, handleDecrement,  handleIncrement} = this.props;
    return(
      <ParentElement classes={classes} count={count} decrement={handleDecrement} encrement={handleIncrement}/>
    )
  }
}

IncrementDecrement.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return { count: state.IncrementAndDecrement  };
};

const mapDispatchToProps = (dispatch) => {
    return{
        handleDecrement: () => {
           dispatch({ type: 'DECREMENT' });
        },
        handleIncrement: () => {
          dispatch({ type: 'INCREMENT' });
        }
    }
};

const connectedApps = connect(
    mapStateToProps,
    mapDispatchToProps
)(IncrementDecrement);

export default withStyles(styles)(connectedApps);
