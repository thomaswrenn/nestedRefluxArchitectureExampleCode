var React = require('react');
var _ = require('lodash');

var Actions = require('../actions/Actions');

var ZipcodeFilterStringStore = require('../stores/ZipcodeFilterStringStore');

var ZipcodeFilterField = React.createClass({
    componentDidMount() {
        this.throttledUpdateZipcodeFilterString = _.throttle((newValue) => {
            Actions.updateZipcodeFilterString(newValue);
        }, 500);
    },
    render() {
        return (
            <div>
                <div>Zipcode Filter Field</div>
                <input onChange={this.onTyping} />
            </div>
        );
    },
    onTyping(typingEvent) {
        this.throttledUpdateZipcodeFilterString(typingEvent.target.value);
    }
});

module.exports = ZipcodeFilterField;
