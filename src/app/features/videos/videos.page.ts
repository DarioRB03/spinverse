import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../core/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss']
})
export class VideosPage implements OnInit {
  videos: any[] = [];
  selectedVideoId: string | null = null;

  constructor(private videosService: VideosService) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.videosService.getVideos().subscribe(
      (response) => {
        this.videos = response.items;
      },
      (error) => {
        console.error('Error loading videos', error);
      }
    );
  }

  playVideo(videoId: string) {
    this.selectedVideoId = videoId;
  }

  closeVideoPlayer() {
    this.selectedVideoId = null;
  }
}
