import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createDM } from '../../../actions/dms_actions';
import { fetchResults, clearResults } from '../../../actions/search_actions';
import SearchResult from './search_result';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      isFocused: false,
      selectedResult: -1,
      originalTerm: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.focusResults = this.focusResults.bind(this);
    this.blurResults = this.blurResults.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const selectedResult = this.state.selectedResult >= 0 ? this.state.selectedResult : 0;

    const selectedUser = this.props.searchResults[selectedResult].id

    const duplicateChannelCheck = this.props.dmChannels.filter(channel =>
      channel.recipientId === parseInt(selectedUser));

    if (duplicateChannelCheck.length > 0) {
      this.props.history.push(`/channels/@me/${duplicateChannelCheck[0].path}`)
    } else {
      this.props.createDM(selectedUser).then(action => {
        const dmPath = Object.values(action.chat_channel)[0].path
        this.props.history.push(`/channels/@me/${dmPath}`)
      });
    }

    this.setState({ searchTerm: "" });
    this.props.clearResults();
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value, originalTerm: e.target.value });
    if (!e.target.value) {
      this.props.clearResults();
      this.setState({ selectedResult: -1 });
    } else {
      this.props.fetchResults(e.target.value);
    }
  }

  handleKeyDown(e) {
    const resultLength = this.props.searchResults.length;

    if (resultLength > 0) {
      switch (e.keyCode) {
        case 38:
          e.preventDefault();
          if (this.state.selectedResult > 0) {
            this.setState({
              selectedResult: this.state.selectedResult - 1,
              searchTerm: this.props.searchResults[this.state.selectedResult - 1].username,
            });
          } else if (this.state.selectedResult === 0) {
            this.setState({
              selectedResult: this.state.selectedResult - 1,
              searchTerm: this.state.originalTerm,
            })
          }
          break;
        case 40:
          e.preventDefault();
          if (this.state.selectedResult < resultLength - 1) {
            this.setState({ 
              selectedResult: this.state.selectedResult + 1,
              searchTerm: this.props.searchResults[this.state.selectedResult + 1].username,              
            });
          }
          break;
        case 27:
          document.activeElement.blur();
          break;
      }
    }
  }

  focusResults() {
    this.setState({ isFocused: true });
  }

  blurResults() {
    this.setState({ isFocused: false, selectedResult: -1 });
  }

  render() {
    const renderResults = this.props.searchResults.map((user, index) => {
      return (
        <SearchResult user={user} key={index}
          selected={this.state.selectedResult === index} />
      )
    }
    );

    return <form className="search-bar" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Find or start a conversation"
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        value={this.state.searchTerm}
        onFocus={this.focusResults}
        onBlur={this.blurResults} />
      <ul className="search-results">
        {this.state.isFocused ? renderResults : null}
      </ul>
    </form >
  }
}

const mapStateToProps = state => ({
  dmChannels: Object.values(state.entities.dmChannels),
  searchResults: state.search,
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  createDM: recipientId => dispatch(createDM(recipientId)),
  fetchResults: searchTerm => dispatch(fetchResults(searchTerm)),
  clearResults: () => dispatch(clearResults()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));