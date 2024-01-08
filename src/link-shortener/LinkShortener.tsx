import React, { ChangeEvent, useRef } from 'react';
import './LinkShortener.scss';
import { ShortenLinkService } from '../shorten-link-service/shorten-link-service';
import { Link } from '../link/Link';

export class LinkShortener extends React.Component<
  {},
  {
    value: string;
    error: boolean;
  }
> {
  shortenLinkService = new ShortenLinkService();
  shortenedLinks: { fullLink: string; shortenedLink: string }[] = [];
  constructor(props: any) {
    super(props);
    this.state = { value: '', error: false };

    this.handleChange = this.handleChange.bind(this);
    this.shortenLink = this.shortenLink.bind(this);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="bg-secondary link-shortener p-4 row justify-items-center">
            <div className="col-12 col-md-8">
              <input
                placeholder="Shorten a link here..."
                type="text"
                className={`w-100 ${this.state.error ? 'error' : ''}`}
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-12 col-md-4">
              <button
                onClick={this.shortenLink}
                className="btn btn-primary w-100 mt-3 mt-lg-0 "
              >
                Shorten It!
              </button>
            </div>

            {this.state.error ? (
              <div className="row">
                <p className="text-danger mb-0">
                  <i>Please add a link</i>
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="container">
          {this.shortenedLinks.map((link, i) => {
            return (
              <div
                className="row justify-items-center link-container"
                id={`item-${i}`}
              >
                <Link
                  key={link.shortenedLink}
                  shortenedLink={link.shortenedLink}
                  fullLink={link.fullLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  handleChange(event: any) {
    this.setState({ ...this.state, value: event.target.value });
  }

  async shortenLink() {
    const isInvalid = this.state.value.trim() === '';
    this.setState({ ...this.state, error: isInvalid });
    if (isInvalid) return;
    const shortenedLink = await this.shortenLinkService.shortenLink(
      this.state.value
    );

    console.log('before this.shortened', this.shortenedLinks);

    this.shortenedLinks.push({
      fullLink: this.state.value,
      shortenedLink: shortenedLink,
    });
    console.log('after this.shortened', this.shortenedLinks);

    this.setState({ value: '' });
  }
}
