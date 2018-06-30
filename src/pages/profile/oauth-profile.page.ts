import { Component } from '@angular/core';

import { OAuthProfile } from '../oauth/models/oauth-profile.model';
import { OAuthService } from '../oauth/oauth.service';

@Component({
	templateUrl: 'oauth-profile.html',
	providers: [OAuthService]
})
export class OAuthProfilePage {
	private oauthService: OAuthService;
	profile: OAuthProfile;

	constructor(oauthService: OAuthService) {
		this.oauthService = oauthService;
		oauthService.getProfile()
			.then(profile => this.profile = profile);
	}
}