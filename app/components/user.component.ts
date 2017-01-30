import { ajaxPost } from 'rxjs/observable/dom/AjaxObservable';
import { NgModel } from '@angular/forms/src/directives';
import { InputDecorator } from '@angular/core/src/metadata/directives';
import { NgIf } from '@angular/common/src/directives/ng_if';
import { NgFor } from '@angular/common/src/directives/ng_for';
import { Component, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostService]
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];
    constructor(private postService: PostService) {
        this.name = 'Abhishek';
        this.email = 'abhi@gmail.com';
        this.address = {
            street: 'pragati layout',
            city: 'Bangalore',
            state: 'KA',
        }
        this.hobbies = ['Music', 'Movie', 'Sport'];
        this.showHobbies = false;
        this.postService.getPost().subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });
    }
    toggleHobbies() {
        return this.showHobbies = this.showHobbies ? false : true;
    }
    addHobby(hobby: any) {
        if (hobby != "" && this.hobbies.indexOf(hobby) == -1)
            this.hobbies.push(hobby)
    }
    deleteHobby(i: any) {
        this.hobbies.splice(i, 1);
    }

}
interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}
