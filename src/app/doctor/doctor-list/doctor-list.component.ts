import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.interface';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  imageClasses: string[] = [
    'https://sarahscoop.com/wp-content/uploads/2021/10/sanji-one-piece.jpg',
    'https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg',
    'https://i0.wp.com/ravingotaku.com/wp-content/uploads/2022/04/anime-characters-with-pink-hair1.jpg?resize=500%2C287&ssl=1',
    'https://wealthofgeeks.com/wp-content/uploads/2023/01/Kamado-Tanjiro-1024x576.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3OQgsEZxn-GTfqZlWb4ZffnZX_gj_F8iOA&usqp=CAU',
    'https://cdn.myanimelist.net/s/common/uploaded_files/1471938539-558bcd453e4ab393e9ded080689e5d60.jpeg',
    'https://www.pngfind.com/pngs/m/77-779869_kawaii-anime-cutest-blue-haired-anime-character-blue.png',
    'https://i0.wp.com/animegalaxyofficial.com/wp-content/uploads/2022/07/20220730_205207-min.jpg?resize=750%2C422&ssl=1',
    'https://www.wallpaperup.com/uploads/wallpapers/2016/01/28/883875/371456acf7c746615f6f1a06ff17d00c-700.jpg'
  ];

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (doctors: Doctor[]) => {
        this.doctors = doctors;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  enableEditMode(doctor: Doctor): void {
    doctor.editMode = true;
  }

  updateDoctor(doctor: Doctor): void {
    this.doctorService.updateDoctor(doctor.doctor_Id, doctor).subscribe({
      next: () => {
        this.getDoctors();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  deleteDoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor.doctor_Id).subscribe({
      next: () => {
        this.getDoctors();
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
