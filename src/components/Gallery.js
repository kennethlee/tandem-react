import React, { Component } from 'react';
import axios from 'axios';

import ImageUnit from './ImageUnit.js';

const BASE_URL = 'https://demo.tandemvault.com/api/v1/assets';
const API_KEY = '4ce6231404168c54271da1c41af01659547716332d5ecb072ef0cc30f2521d5c';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      images: [],
    };

    this.fetchAssets = this.fetchAssets.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.fetchAssets(this.state.pageNumber);
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
      this.fetchAssets(this.state.pageNumber);
    }
  }

  fetchAssets(pageNumber) {
    const FULL_URL = `${BASE_URL}?api_key=${API_KEY}&page=${pageNumber}`;

    axios.get(FULL_URL)
      .then((response) => {
        const APPENDED_GALLERY = [...this.state.images, ...response.data];
        this.setState({ images: APPENDED_GALLERY });
        console.log(this.state.images);

        // Prepare pageNumber for next fetch by incrementing it.
        const NEXT_PAGE = this.state.pageNumber + 1;
        this.setState({ pageNumber: NEXT_PAGE });
        console.log('Next page # I will fetch is', this.state.pageNumber);
      });
  }

  render() {
    const IMAGE_SET = this.state.images.map((image) => {
      return <ImageUnit imageData={image} />;
    });

    return (<div>
      {IMAGE_SET}
    </div>);
  }
}
