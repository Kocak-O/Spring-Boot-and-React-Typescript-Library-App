package org.kocak.libraryappbackend.dao;

import org.kocak.libraryappbackend.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
