const chatbox = () => {
    return (
        <div className="chat">
            <div className="chat-container">
                {/* <header class="start-header">
                    <h1><i class="fas fa-comments"></i> Cata </h1>
                </header> */}

                <div className="search-container">
                    <p>Online Users</p>
                </div>
                <div className="conversation-list">
                    <div className="conversation active">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                    <div className="conversation">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                    <div className="conversation">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                    <div className="conversation">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                    <div className="conversation">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                    <div className="conversation">
                        <span className="initial">FM</span>
                        <div className="title-text">Frank Mutabazi</div>
                        <div className="created-date">Apr 16</div>
                        <div className="conversation-message">
                            This is a message This is a message
                        </div>
                    </div>

                </div>
                <div className="new-message-container">
                    <h1><i class="fas fa-comments"></i> Cata </h1>
                </div>
                <div className="chat-title">
                    <span> Frank Mutabazi</span>
                    <i class="fas fa-trash" aria-hidden="true"></i>
                </div>
                <div className="chat-message-list">

                    <div className="message-row other-message">
                        <div className="message-text">Yeah I think that was a perfect plan otherwise we will still be there up until now.</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">Ok Then</div>
                        <div className="message-time">Apr 16</div>
                    </div>


                    <div className="message-row other-message">
                        <div className="message-text">so what is the conclusion</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">Ok Then</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row other-message">
                        <div className="message-text">so what is the conclusion</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                    <div className="message-row you-message">
                        <div className="message-text">let us link up on Monday and discuss it</div>
                        <div className="message-time">Apr 16</div>
                    </div>

                </div>
                <div className="chat-form">
                    <input id="msg" type="text" placeholder="Type a message" required autocomplete="off"/>
                    <i class="fas fa-paper-plane" />
                </div>
            </div>

            
        </div> 
    )
}

export default chatbox;
