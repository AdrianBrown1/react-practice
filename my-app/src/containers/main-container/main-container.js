import { connect } from 'react-redux';
import { navigate } from '../../actions/navigate';
// import screen here
const mapStateToProps = (state) => {
  return {
    //some state
  }
}

const mapDispatchToProps = (dispatch) => ({
  // Dispatch actions
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(/* pass screen here */)