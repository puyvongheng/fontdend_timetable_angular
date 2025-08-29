import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-room',
  imports: [SharedModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  rooms: any[] = []; // Array to hold room data
  roomNumber: string = ''; // Room number input
  capacity: number | null = null; // Room capacity input
  floor: number | null = null; // Room floor input
  roomType: string = ''; // Room type input
  selectedRoomId: number | null = null; // The selected room for editing
  isVisible = false; // Modal visibility

  constructor(private apiService: ApiService, private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.load();
  }

  // Load rooms
  load(): void {
    this.apiService.getRooms().subscribe((response) => {
      this.rooms = response;
    });
  }

  // Prepare room object
  private createRoomObject(): any {
    return {
      room_number: this.roomNumber,
      capacity: this.capacity,
      floor: this.floor,
      room_type: this.roomType
    };
  }

  // Add a new room
  addRoom(): void {
    if (this.roomNumber.trim() && this.capacity && this.floor && this.roomType) {
      const newRoom = this.createRoomObject();

      this.apiService.createroom(newRoom).subscribe(
        () => {
          this.nzMessageService.success('Room added successfully');
          this.load(); // Reload rooms
          this.clearForm(); // Clear form
          this.isVisible = false; // Close modal
        },
        (error) => {
          this.handleError(error, 'Failed to add room');
        }
      );
    } else {
      this.nzMessageService.warning('Please provide all room details!');
    }
  }

  // Edit a room
  editRoom(id: number): void {
    const room = this.rooms.find((r) => r.id === id);
    if (room) {
      this.selectedRoomId = id;
      this.roomNumber = room.room_number;
      this.capacity = room.capacity;
      this.floor = room.floor;
      this.roomType = room.room_type;
      this.showModal();
    }
  }

  // Update an existing room
  updateRoom(): void {
    if (this.selectedRoomId && this.roomNumber.trim() && this.capacity && this.floor && this.roomType) {
      const updatedRoom = this.createRoomObject();

      this.apiService.update('rooms', this.selectedRoomId, updatedRoom).subscribe(
        () => {
          this.nzMessageService.success('Room updated successfully');
          this.load(); // Reload rooms
          this.clearForm(); // Clear form
          this.selectedRoomId = null; // Reset selection
          this.isVisible = false; // Close modal
        },
        (error) => {
          this.handleError(error, 'Failed to update room');
        }
      );
    } else {
      this.nzMessageService.warning('Please provide all room details!');
    }
  }

  // Delete a room with confirmation
  confirmDelete(id: number): void {
    this.apiService.delete('rooms', id).subscribe(
      () => {
        this.nzMessageService.success('Room deleted successfully');
        this.load(); // Reload rooms
      },
      (error) => {
        this.handleError(error, 'Failed to delete room');
      }
    );
  }

  // Delete a room
  deleteRoom(id: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      this.apiService.delete('rooms', id).subscribe(
        () => {
          this.load(); // Reload rooms after deletion
        },
        (error) => {
          console.error('Error deleting room:', error);
        }
      );
    }
  }


  // Clear form inputs
  clearForm(): void {
    this.roomNumber = '';
    this.capacity = null;
    this.floor = null;
    this.roomType = '';
  }

  // Modal control
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.clearForm(); // Reset form when modal is closed
  }

  // Handle API errors
  private handleError(error: any, message: string): void {
    console.error(message, error);
    if (error.status === 500) {
      this.nzMessageService.error('Server error occurred. Please try again later.');
    } else if (error.status === 0) {
      this.nzMessageService.error('Network error. Please check your internet connection.');
    } else {
      this.nzMessageService.error(`${message}: ${error.message}`);
    }
  }
}
