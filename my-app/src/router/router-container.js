import { connect } from 'react-redux';
import Router from './router';

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(
  mapStateToProps,
)(Router);
