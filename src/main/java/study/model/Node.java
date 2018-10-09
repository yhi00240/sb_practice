package study.model;

import org.springframework.stereotype.Service;

@Service
public class Node {
    private String id;
    private Boolean alive;

    public Node(){
        id = "jihyunii";
        alive = false;
    }

    public String getId() {
        return id;
    }

    public Boolean getAlive() { return alive; }

    public void setId(String id) {
        this.id = id;
    }

    public void setAlive(Boolean alive) { this.alive = alive; }
}
