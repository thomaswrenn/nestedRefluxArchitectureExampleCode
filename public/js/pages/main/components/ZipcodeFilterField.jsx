var React = require('react');
var _ = require('lodash');

var Actions = require('../actions/Actions');

var ZipcodeFilterField = React.createClass({
    componentWillMount() {
        this.throttledUpdateZipcodeFilterString = _.throttle((newValue) => {
            Actions.updateZipcodeFilterString(newValue);
        }, 500);
    },
    render() {
        return (
            <div>
                <div>ZipcodeFilterField</div>
                <input onChange={this.onTyping} />
            </div>
        );
    },
    onTyping(typingEvent) {
        this.throttledUpdateZipcodeFilterString(typingEvent.target.value);
    }
});

module.exports = ZipcodeFilterField;
