import React from 'react';

import './Link.scss';

export class Link extends React.Component<
  { fullLink: string; shortenedLink: string },
  { copied: boolean }
> {
  constructor(props: { fullLink: string; shortenedLink: string }) {
    super(props);
    this.state = { copied: false };
  }
  render() {
    return (
      <div className="link text-start py-2 py-md-3 d-md-flex justify-content-between align-items-center">
        <div className="border-bottom px-3 pb-2 pb-md-0">
          <span className="full-link">{this.props.fullLink}</span>
        </div>
        <div className="px-3 py-2 py-md-0 d-md-flex align-items-center">
          <span className="link-primary mr-4 d-block pb-2">
            {this.props.shortenedLink}
          </span>
          <button
            className={`btn w-100 ${
              this.state.copied ? 'btn-secondary' : 'btn-primary'
            }`}
            onClick={this.copyLink.bind(this)}
          >
            {this.state.copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    );
  }

  copyLink() {
    navigator.clipboard.writeText(this.props.shortenedLink);
    this.setState({ copied: true });
  }
}
