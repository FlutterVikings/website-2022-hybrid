export class Activity {
  activity_id: string;
  title: string;
  intro: string;
  content: string;
  url: string;
  constructor({ activity_id, title, intro, content, url }: any) {
    this.activity_id = activity_id;
    this.title = title;
    this.intro = intro;
    this.content = content;
    this.url = url;
  }
}
