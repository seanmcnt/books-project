package com.seanmcnt.books;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "Books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    @Id
    private ObjectId id;
    private String isbn;
    private String title;
    private String author;
    private String releaseDate;
    private String plotLink;
    private String cover;
    private List<String> genres;
    private List<String> alternate;
    @DocumentReference
    private List<Review> reviewIds;
}
