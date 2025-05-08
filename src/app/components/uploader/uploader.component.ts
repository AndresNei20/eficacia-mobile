import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IconComponents } from '../../../utils/icons';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class FileUploaderComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  
  @Input() title = 'Cargar Archivo';
  @Input() hint = 'Adjuntar desde archivo';
  @Input() buttonText = 'Upload Files';
  @Input() multiple = true;
  @Input() accept = '*';
  @Input() maxFileSize = 10 * 1024 * 1024; // 10MB default
  @Input() title2 = 'Imagen Cargada';
  
  @Output() filesSelected = new EventEmitter<File[]>();
  @Output() filesUploaded = new EventEmitter<File[]>();
  @Output() removeFiles = new EventEmitter<File[]>();
  
  isDragOver = false;
  files: File[] = [];
  uploading = false;

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileSelected(event: Event) {
    console.log(event)
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
      // Reset the input to allow selecting the same file again
      input.value = '';
    }
  }

  private handleFiles(fileList: FileList) {
    const validFiles: File[] = [];
    
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      
      if (file.size > this.maxFileSize) {
        console.warn(`File ${file.name} exceeds maximum size of ${this.formatFileSize(this.maxFileSize)}`);
        continue;
      }
      
      validFiles.push(file);
    }
    
    if (this.multiple) {
      this.files = [...this.files, ...validFiles];
    } else {
      this.files = validFiles.slice(0, 1);
    }
    
    this.filesSelected.emit(this.files);
  }

  removeFile(file: File, event: Event) {
    event.stopPropagation();
    this.files = this.files.filter(f => f !== file);
    this.removeFiles.emit(this.files);
  }

  uploadFiles() {
    if (this.files.length === 0) return;
    
    this.uploading = true;
    // Simulate upload (replace with actual API call)
    setTimeout(() => {
      this.uploading = false;
      this.filesUploaded.emit(this.files);
      this.files = [];
    }, 1500);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}