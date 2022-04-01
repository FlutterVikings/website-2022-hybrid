type SocialUsername = string;

export class Social {
  twitter: SocialUsername;
  github: SocialUsername;
  linkedin: SocialUsername;

  constructor({ twitter, github, linkedin }: any) {
    this.twitter = twitter;
    this.github = github;
    this.linkedin = linkedin;
  }
}
