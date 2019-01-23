import { connect } from 'react-redux';
import SessionForm from './session_form';
import { register, clearSessionErrors } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'register',
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(register(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);