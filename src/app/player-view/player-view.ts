import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Song } from '../song/song';
import { TrackList } from '../track-list/track-list';
@Component({
  selector: 'app-player-view',
  standalone: true,
  imports: [CommonModule, Song, TrackList],
  templateUrl: './player-view.html',
  styleUrl: './player-view.css',
})
export class PlayerView {

}
